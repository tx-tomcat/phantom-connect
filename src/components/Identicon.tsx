import { useEffect, useRef } from "react";
import Jazzicon from "@metamask/jazzicon";
import styled from "@emotion/styled";
import { usePhantomContext } from "../providers";

const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
`;

export default function Identicon() {
  const ref = useRef<HTMLDivElement>();
  const { pubKey } = usePhantomContext().connection;

  useEffect(() => {
    if (pubKey && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(pubKey.slice(2, 10), 16)));
    }
  }, [pubKey]);

  return <StyledIdenticon ref={ref as any} />;
}
