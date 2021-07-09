import * as React from "react";
import styled from "styled-components";

import Title from "components/title-section";
import Section from "components/section";
import BlockWork from "components/block-work";

import { works } from "website-config";

const ContentContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Component() {
  return (
    <Section>
      <Title>Work</Title>
      <ContentContainer>
        {works.map((work) => {
          return <BlockWork {...work} key={work.name} logo={work.logo} />;
        })}
      </ContentContainer>
    </Section>
  );
}
