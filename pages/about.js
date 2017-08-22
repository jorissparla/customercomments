export default props => {
  console.log(props);
  return (
    <div>
      Hallo{props.url.query.id}
    </div>
  );
};
