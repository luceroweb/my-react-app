export const ExampleChildComponent = ({ parentMethod }) => {
  return(
    <div>
      <button onClick={() => parentMethod}>Click me to call parent method</button>
    </div>
  )
}