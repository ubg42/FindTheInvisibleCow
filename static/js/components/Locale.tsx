import React from "react";
import styled from "styled-components";
import i18n, { LanguageKey } from "../i18n";
import { useI18n } from "../context/i18n";

const { useEffect, useRef, useState } = React;

const Locale: React.FC = () => {
  const { language, set } = useI18n();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Automatically close
  useClickOutside(wrapperRef, () => setOpen(false));

  return (
    <Wrapper ref={wrapperRef}>
      <Button onClick={() => setOpen(o => !o)}>{language.language}</Button>
      {open && (
        <List>
          {Object.values(LanguageKey).map(key => (
            <ListButton
              key={key}
              onClick={() => {
                set(key);
                setOpen(false);
              }}
            >
              {i18n[key].language}
            </ListButton>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

// Hooks

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  cb: () => void,
) => {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = ref.current;
      if (el != null && e.target instanceof Node && !el.contains(e.target)) {
        cbRef.current();
      }
    };

    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, [ref]);
};

// Styles

const Wrapper = styled.div`
  position: relative;
  width: 100px;
`;

const List = styled.div`
  position: absolute;
  bottom: 100%;
`;

const Button = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  font: inherit;
  padding: 0.325em 0.5em;
  width: 100%;
`;

const ListButton = styled(Button)`
  border-bottom: 0;

  &:hover {
    background: #ddd;
  }
`;

export default Locale;
