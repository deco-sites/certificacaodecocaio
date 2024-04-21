export interface Props {
  code: string;
  description: string;
}

export default function ({ code, description }: Props) {
  return (
    <div class="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      Código: {code}
      <br />
      descrição: {description}
    </div>
  );
}
