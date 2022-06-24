import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBE_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      });
      navigate("/event");
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
  }

  return (
    <div className="bg-blur bg-no-repeat bg-cover min-h-screen flex flex-col items-center">
      <div className="bg-react bg-no-repeat bg-top">
        <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto gap-20 ">
          <div className="max-w-[640px]">
            <Logo />
            <h1 className="text-[2.5rem] mt-8 leading-tight">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="text-gray-200 mt-6 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src="/src/assets/code-mockup.png" alt="" className="mt-10" />
      </div>
    </div>
  );
}
