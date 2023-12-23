
interface GreetingsProps {
  name: string;
}

export default function Greetings({ name }: GreetingsProps) {
  return <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">{name}</h1>
    ;
}
