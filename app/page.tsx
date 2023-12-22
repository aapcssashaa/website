
async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

 const page = () => {
  return (
    <div className="text-blue-500 text-4xl text-center">
      <div></div>
      <div className="mt-10">Home Page</div>
      <br />
    </div>

  );
};
export default page;
