import Typewriter from 'typewriter-effect';

const Heading = () => {
  return (
    <div className="font-heading flex flex-col items-center font-semibold justify-center mt-16 text-5xl gap-4">
      <span>Jessa Catedral</span>
      <div className="flex items-center">
        <Typewriter
          options={{
            strings: ['Interior', 'Graphic', "Product"],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
            pauseFor: 500,
            cursor: ""
          }}
        />
        <span className="ml-4">Designer</span>
      </div>
    </div>
  );
};

export default Heading;
