
const Indicators = ({}) => {
  return (
    <div>
      <div className="text-blue-500 text-4xl text-center">
        <div>Indicators Page</div>
        <br />
        <br />
        <div className="flex flex-col items-center">
          <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer mb-10">
            <a href="/indicators/economicscore">Economic Score</a>
          </button>
          <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer mb-10">
            <a href="/indicators/unemploymentrate">Unemployment Rate</a>
          </button>
          <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer mb-10">
            <a href="/indicators/consumersentiment">Consumer Sentiment</a>
          </button>
          <button className="bg-gray-400 rounded-lg hover:bg-gray-500 cursor-pointer mb-10">
            <a href="/indicators/inflation">Inflation Rate</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Indicators;
