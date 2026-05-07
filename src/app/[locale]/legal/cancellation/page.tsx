export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 text-[var(--text-main)] relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="glass-panel p-10 md:p-16 rounded-[2rem] border border-white/60 shadow-xl bg-white/60">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-pop tracking-tight mb-8">
            Política de devoluciones y reembolsos 
          </h1>

          <p>La presente Política establece los lineamientos bajo los cuales SEVENN MARKETING DIGITAL, S.A. DE C.V. (en adelante “ACTVREACH”) procesará solicitudes de reembolso o devolución relacionadas con los servicios adquiridos a través del sitio web www.actvreach.com (en lo sucesivo, el “Sitio Web”). El Usuario reconoce que, al contratar cualquiera de nuestros servicios, acepta expresamente lo dispuesto en este documento, el cual forma parte integrante de los <strong>Términos y Condiciones de Uso.</strong></p>
          
          <div className="space-y-6 text-[var(--text-main)]/80 leading-relaxed font-medium">

            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">1. Alcance</h3>
            <p>Esta política aplica exclusivamente a los servicios adquiridos a través del Sitio Web. No será aplicable a transacciones realizadas mediante canales distintos o a servicios prestados por terceros que tengan vínculo contractual directo con el Usuario.</p>
            
            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">2. Causas de procedencia del reembolso</h3>
            <p>ACTVREACH únicamente procederá con la devolución total o parcial de pagos en los siguientes supuestos:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Incumplimiento comprobado </strong>  en la entrega o ejecución del servicio contratado, atribuible directamente a ACTVREACH.</li>
              <li><strong>Imposibilidad técnica</strong> de prestar el servicio por causas imputables a ACTVREACH.</li>
              <li><strong>Errores de facturación o cobros duplicados</strong> siempre que se acrediten con documentación comprobatoria</li>
            </ul>

            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">3. Exclusiones</h3>
            <p>No procederá el reembolso o devolución en los siguientes casos:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Cuando el servicio haya sido ejecutado total o parcialmente de acuerdo con lo pactado.</li>
              <li>Cuando la insatisfacción del Usuario se base en percepciones subjetivas y no en un incumplimiento objetivo del servicio.</li>
              <li>Cuando el Usuario haya incumplido con las condiciones necesarias para la correcta prestación del servicio.</li>
              <li>Por causas de fuerza mayor o caso fortuito que imposibiliten la ejecución del servicio y que no sean atribuibles a ACTVREACH.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">4. Plazo para solicitar reembolso</h3>
            <p>El Usuario deberá presentar su solicitud de reembolso en un plazo máximo de cinco (5) días hábiles contados a partir de la fecha de confirmación de la compra, enviando un correo electrónico a informes@actvreach.com con la siguiente información:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Nombre completo y datos de contacto.</li>
              <li>Número de orden o comprobante de compra.</li>
              <li>Descripción detallada del motivo de la solicitud.</li>
              <li>Documentos y evidencias que respalden la petición.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">5. Procedimiento</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>Una vez recibida la solicitud, ACTVREACH revisará la información y podrá requerir datos o documentos adicionales para emitir una resolución.</li>
              <li>ACTVREACH comunicará al Usuario la aprobación o rechazo del reembolso en un plazo máximo de diez (10) días hábiles contados a partir de la recepción completa de la solicitud.</li>
              <li>En caso de aprobación, el reembolso se procesará utilizando el mismo método de pago empleado por el Usuario, salvo que se acuerde lo contrario por escrito.</li>
            </ul>

            <h3 className="text-2xl font-bold text-[var(--text-main)] mt-8">6. Disposiciones finales</h3>
            <p>ACTVREACH se reserva el derecho de modificar esta Política en cualquier momento, publicando la versión actualizada en el Sitio Web. Las modificaciones entrarán en vigor a partir de su fecha de publicación y serán aplicables a todas las transacciones posteriores.</p>
            
          </div>
        </div>
      </div>
    </main>
  );
}