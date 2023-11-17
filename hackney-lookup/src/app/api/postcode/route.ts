import conn from "../../../../lib/db";

export async function POST(req: Request, res: Response) {
  try {
    const { postcode } = await req.json();

    const query = `SELECT line1, line2, line3, postcode FROM hackney_address WHERE postcode=$1`;
    const values = [postcode];

    const result = await conn!.query(query, values);
    const data = result.rows;

    if (data.length === 0) {
      return Response.json({ error: "No matching addresses found." });
    }

    return Response.json({ data });
  } catch (error) {
    console.log(error);
  }
}
