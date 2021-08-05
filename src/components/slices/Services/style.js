import { motion } from "framer-motion";
import { transparentize } from "polished";
import styled from "styled-components";

export const Title = styled(motion.h2)`
  text-align: center;
`;

export const ServicesContainer = styled.div``;
export const Service = styled(motion.div)`
  padding: 2rem;
  height: 90%;
  border-radius: 0.5rem;
  background-color: ${({ bg, theme }) =>
    bg === "with_bg" ? theme.bg : theme.primary};
  margin-top: 2rem;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    i {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.text};
      margin-right: 1rem;
    }

    h3 {
      margin: 0;
    }
  }
  .content {
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;