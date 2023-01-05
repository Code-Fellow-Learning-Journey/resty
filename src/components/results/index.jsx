

const Results = (props) => {

  const { data, loading } = props;

  return (
    <section>
      {loading ? 
        <pre> Loading...</pre>:
      <pre data-testid="pre-form">{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      
      }
    </section>
  );

}

export default Results;
