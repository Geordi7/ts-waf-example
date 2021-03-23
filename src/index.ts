
import {mount} from 'ts-waf';
import {tag, init, tools, View, StateEventTransition} from './model';

const {checkbox} = tools;
const {div,input,hr,label,ul,li} = tag;
const {floor} = Math;
const divYears = 1000*60*60*24*365;
const ageInYears = (d: Date) => {
    const now = new Date();
    const age = (Number(now) - Number(d))/divYears;
    return floor(age);
};

const main: View = (s) => div({id:'layout'},
    `Hello ${s.name}, `,
    s.cool ?
        `I heard you're pretty cool for a ${ageInYears(s.birthday)} year old` :
        `you're not so cool despite being ${ageInYears(s.birthday)} years old`,
    hr({}),
    ul({},
        li({}, label({},
                'name: ',
                input({type: 'text', value: s.name, oninput: editName}),
        )),
        li({}, label({},
            checkbox({onchange: editCool}, s.cool),
            'cool?'
        )),
        li({}, label({},
            'birthdate: ',
            input({type: 'date', value: dateToVal(s.birthday), oninput: editDate})
        )),
    ),
);

const editName: StateEventTransition = (s,e: any) => ({...s, name: e.target.value});
const editCool: StateEventTransition = (s,e: any) => ({...s, cool: (!!e.target.checked)});
const editDate: StateEventTransition = (s,e: any) => {
    console.log(e.target.value);
    return {...s, birthday: valToDate(e.target.value)};
}

const dateToVal = (d: Date) =>
    '' + d.getFullYear() +
    '-' + d.getMonth().toString().padStart(2, '0') + 
    '-' + d.getDate().toString().padStart(2, '0')
const valToDate = (s: string) => {
    const bits = s.split('-').map((s: `${number}`) => Number(s));
    console.log(bits);
    return new Date(bits[0], bits[1], bits[2]);
}

const root = document.getElementById('root');
const sm = mount(root, main, init());
