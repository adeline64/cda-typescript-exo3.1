import { add, stringYoYo } from "./utils";

const title = 'Hello TypeScript' as string;

document.getElementById('content')!.innerHTML = `${title}`;

console.log(title, stringYoYo(title), add(1, 3));
