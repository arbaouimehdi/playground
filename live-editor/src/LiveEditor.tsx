import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs } from "./types";
import theme from "./utils/theme";

const Container = styled.div`
  border: ${props => props.theme.container.border};
  display: flex;
  min-height: ${props => props.theme.container.minHeight};
`;

interface IProps {
  initialSnippet: ISnippet;
}

const LiveEditor: FC<IProps> = ({ initialSnippet }) => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  console.log(snippet);
  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet(snippet => ({
      ...snippet,
      [type]: changed,
    }));
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Editor code={snippet} onChange={onSnippetChange} />
        <Result snippet={snippet} />
      </Container>
    </ThemeProvider>
  );
};

export default LiveEditor;
