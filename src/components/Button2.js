import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished'; // polished의 darken, lighten 함수 불러옴


const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight:bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${props => 
        props.size === 'large' &&
        css`
            height: 3rem;
            font-size: 1.25rem;
        `}

    ${props => 
        props.size === 'medium' &&
        css`
            height: 2.25rem;
            font-size: 1rem;
        `}
    
    ${props => 
        props.size === 'small' &&
        css`
            height: 1.75rem;
            font-size: 0.875rem;
        `}

    /* 색상 */
    ${props => {
        const color = props.theme.palette[props.color];
        return css`
            background: ${color};
            &:hover {
                background: ${lighten(0.1, color)};
            }
            &:active {
                background: ${darken(0.1, color)};
            }
            ${props =>
            props.outline && 
            css`
                color: ${color};
                background: none;
                border: 1px solid ${color};
                &:hover {
                    background: ${color};
                    color: white;

                }
            `}
        `;
    }}

    /* 버튼 간의 간격 */
    & + &{
        margin-left: 1rem;
    }

    /* fullWidth */
    ${props => props.fullWidth &&
    css`
        width: 100%;
        justify-content: center;
        & + & {
            margin-left: 0;
            margin-top: 1rem;
        }
    `}

`;

function Button2({ children, color, size, outline, fullWidth, ...rest }) {
return <StyledButton color={color} size={size} {...rest} outline={outline} fullWidth={fullWidth}>{children}</StyledButton>;
}

export default Button2;