import { useHistory } from "react-router-dom";
import { Button } from "../Button";

import iconLogout from "../../images/logout.svg";
import iconNonoLogout from "../../images/nono-logout.svg";

import { ModalOverlay, ModalContent, Buttons } from "./styles";

interface IModalLogoutProps {
  setIsModalLogout: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalLogout({ setIsModalLogout }: IModalLogoutProps) {
  const history = useHistory();

  function logoutPlatform() {
    history.push("/");
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Quer mesmo sair?</h2>

        <Buttons>
          <Button onClick={() => setIsModalLogout(false)}>
            <img src={iconNonoLogout} alt="icon nono logout" />
            Não
          </Button>
          <Button onClick={logoutPlatform}>
            <img src={iconLogout} alt="icon logout" />
            Sim
          </Button>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
