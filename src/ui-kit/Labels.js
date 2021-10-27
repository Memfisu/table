import styled from 'styled-components';

const Label = styled.p`
    color: ${props => props.color};
`;

const Span = styled.span`
    font-weight: ${props => props.fontWeight || "bold"};
`;

export { Label, Span };
