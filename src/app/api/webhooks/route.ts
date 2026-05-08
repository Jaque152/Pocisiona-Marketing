import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    

    console.log("Notificación de Octano recibida:", body);

    return NextResponse.json({ success: true, message: "Webhook recibido" }, { status: 200 });
  } catch (error) {
    console.error("Error en webhook de Octano:", error);
    return NextResponse.json({ success: false, message: "Error interno" }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json({ message: "Método no permitido" }, { status: 405 });
}