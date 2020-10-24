import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"; // 리액트 아이콘 라이브러리로 아이콘 불러옴
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind'; // classnames/bind는 css 모듈을 사용할 때 더 쉽게 사용하게 해줌

const cx = classNames.bind(styles); // classNames 라이브러리를 사용해서 styles를 넣어주면 클래스에 스타일을 넣어줄 때 styles을 일일히 안 넣어줘도 되서 편리하다.

function CheckBox({ checked, children, ...rest }) {
    return (
        <div className={cx('CheckBox')} >
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                <div className={cx('icon')}>{checked ? (<MdCheckBox className={cx('checked')}/>) : (<MdCheckBoxOutlineBlank/>) }</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;