import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.css';

export const Button = (props) => {
  if (props.type === 'hamburger') {
    return (
      <button className='bg-transparent	border-transparent py-2' onClick={props.onClick}>
        <div className='bg-black h-0.5 my-2 mx-0 transition duration-700 w-6' />
        <div className='bg-black h-0.5 my-2 mx-0 transition duration-700 w-6' />
        <div className='bg-black h-0.5 my-2 mx-0 transition duration-700 w-6' />
      </button>
    );
  } else if (props.type === 'hide') {
    return (
      <button className='bg-transparent	border-transparent py-2' onClick={props.onClick}>
        <div className={styles.visible} />
        <div className={styles.visible} />
        <div className={styles.visible} />
      </button>
    );
  }

  if (props.type === 'regular' || props.type === 'submit') {
    return (
      <button className='' onClick={props.onClick}>
        <p className='w-80 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blueberry uppercase'>
          {props.text}
        </p>
      </button>
    );
  } else if (props.type === 'small') {
    return (
      <button className='bg-orangada w-8 py-1 text-white font-bold hover:scale-110' onClick={props.onClick}>
        <p className=''>{props.text}</p>
      </button>
    );
  } else if (props.type === 'choice') {
    const buttonClasses = `bg-transparent w-44 py-3 text-blueberry border-b-2 border-navBorder flex justify-center gap-1 ${
      props.isActive ? 'border-orange-500' : ''
    }`;

    return (
      <button className={buttonClasses} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} style={{ color: '#fa4616' }} size='lg' />
        <p className=''>{props.text}</p>
      </button>
    );
  } else if (props.type === 'button') {
    return (
      <button className='bg-blueberryLight w-80 py-1 text-white hover:text-orangada' onClick={props.onClick}>
        <p className=''>{props.text}</p>
      </button>
    );
  }
};
