import styled from "styled-components";


export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        height: 100%;
        display: flex;
        gap: 3.2rem;

        a {
            color: ${props => props.theme["gray-300"]};
            text-decoration: none;
            font-size: 1.25rem;
            position: relative;

            &:hover {
                color: ${props => props.theme["gray-100"]};

                &::after {
                    content: "";
                    width: 100%;
                    height: 0.25rem;
                    background-color: ${props => props.theme["green-500"]};
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -10px;
                }
            }
        }
    }
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    padding: 0 1.25rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`;