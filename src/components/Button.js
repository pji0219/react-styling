import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray

function Button({ children, size, color, outline, fullWidth, ...rest }) { // ...rest를 사용하면 앞의 props를 제외한 다른 모든 것을 resst로 받아옴
    console.log(rest);
return <button className={classNames('Button', size, color, {
    outline, // 조건으로 true, false의 블리언 형태로 오기 때문에 객체 형태로 props 넣어줌
    fullWidth // 특별히 기본값을 지정할 필요는 없다. 기본값을 지정안해도 값이 undefined이기 때문에 처리가 되지 않는다.
})} 
{...rest} // button에 전달해줄 때도 ...rest로 해주면 된다. (rest 객체 안에 있는 모든 것들을 설정해주겠다는 의미)
>
    {children}
</button>; // button.scss에 size, color props 값 전달
}

Button.defaultProps = { // size props 기본값으로 medium
    size: 'medium',
    color: 'blue' // color 기본값으로 blue
};

export default Button;