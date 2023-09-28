import React from "react";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";

import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      <Empty onAdd={() => console.log("CREATE")} />
    </article>
  );
}
