import styled from 'styled-components';

const Box = styled.div`
    display: ${props => props.display || 'block'};
    box-sizing: border-box;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;

const Grid = styled(Box)`
    display: grid;
    grid-gap: ${props => props.gridGap || '5px'};
    grid-template-columns: ${props => props.gridColumns};
    grid-template-rows: ${props => props.gridRows};
    grid-auto-rows: ${props => props.gridAutoRows || '40px'};
`;

export { Box, Grid };