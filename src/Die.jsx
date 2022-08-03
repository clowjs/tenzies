export default function Die(props) {
  return (
    <div className="die">
      <div className="die-face">
        <h2>{props.value}</h2>
      </div>
    </div>
  )
}