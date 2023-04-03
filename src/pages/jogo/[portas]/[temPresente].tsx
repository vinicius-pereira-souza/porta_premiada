// CSS
import styles from "../../../styles/jogo.module.css";

// Components
import { useState, useEffect } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "@/functions/portas";

// Router
import Link from "next/link";
import { useRouter } from "next/router";
import PortaModel from "@/model/porta";

const Jogo = () => {
  const router = useRouter();
  const [valido, setValido] = useState<boolean>(false);
  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const alterarTipo = () => {
      if (router.query.portas && router.query.temPresente) {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdePortasValida = portas >= 3 && portas <= 100;
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdePortasValida && temPresenteValido);
      }
    };

    alterarTipo();
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const alterarTipo = () => {
      if (router.query.portas && router.query.temPresente) {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        return { portas, temPresente };
      }
    };

    const retorno = alterarTipo();
    if (retorno) {
      setPortas(criarPortas(retorno!.portas, retorno!.temPresente));
    }
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => {
            setPortas(atualizarPortas(portas, novaPorta));
          }}
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores Invalidos!</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Jogo;
