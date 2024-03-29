import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Recipe = (props) => {
  return (
    <div className='py-8 2xl:px-20 px-8'>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faMartiniGlassCitrus} style={{ color: '#fa4616' }} size='xl' />
        <h2 className='text-blueberry font-semibold'>HOW TO MAKE</h2>
      </div>
      <ul className='xl:flex gap-4 py-8'>
        {Array.isArray(props.recipe) &&
          props.recipe.map((step, index) => {
            // const [index, action] = step.split(':');

            return (
              <li key={step + index} className='flex flex-col gap-1 items-start text-left text-blueberry'>
                <p className='text-orangada font-semibold'>{'Step ' + (index + 1)}</p>
                <p className='text-blueberry'>{step + '.'}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
