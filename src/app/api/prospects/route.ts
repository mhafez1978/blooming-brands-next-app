import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json("GET request received , but not yet implemented");
}

export async function HEAD(request: Request) {
  return Response.json("HEAD request received , but not yet implemented");
}

export async function POST(request: NextRequest) {
  const {
    name,
    businessName,
    selectedIndustries,
    email,
    phone,
    projectSummary,
    marketCmpetitors,
    existingWebsite,
    existingHost,
    projectBudget,
    appointment,
  } = await request.json();
}

export async function PUT(request: Request) {
  return Response.json("PUT request received , but not yet implemented");
}

export async function DELETE(request: Request) {
  return Response.json("DELETE request received , but not yet implemented");
}

export async function PATCH(request: Request) {
  return Response.json("PATCH request received , but not yet implemented");
}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS`
// and  set the appropriate Response `Allow` header depending on the other
// methods defined in the route handler.
export async function OPTIONS(request: Request) {
  return Response.json("OPTIONS request received , but not yet implemented");
}
