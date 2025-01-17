import { CustomArrowProps } from 'react-slick'

export default function NextExperience(props: CustomArrowProps) {

  return (
    <svg
      onClick={props.onClick}
      className={props.className}
      viewBox="0 0 33 44"
      fill="none"
      style={{
        ...props.style,
        position: 'absolute',
        top: '45%',
        right: '-3%',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        width: '38px',
        height: '38px',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.0664 17.4993C29.0172 19.4803 29.0172 23.8209 26.0664 25.8019L7.78692 38.0736C4.46524 40.3036 0 37.9231 0 33.9223V9.37893C0 5.37814 4.46523 2.99768 7.78691 5.22764L26.0664 17.4993Z"
        fill="white"
      />
    </svg>
  )
}