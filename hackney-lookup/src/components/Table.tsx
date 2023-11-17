export default function Table(props: any) {
  return (
    <>
      <table className="govuk-table lbh-table">
        <tbody className="govuk-table__body">
          {props.data &&
            props.data.map((a: any, index: number) => (
              <tr className="govuk-table__row" key={index}>
                <td className="govuk-table__cell">{a.line1}</td>
                <td className="govuk-table__cell">{a.line2}</td>
                <td className="govuk-table__cell">{a.line3}</td>
                <td className="govuk-table__cell govuk-table__cell--numeric">
                  {a.postcode}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
