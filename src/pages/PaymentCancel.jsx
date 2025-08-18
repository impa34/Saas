import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { XCircle } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-red-500 rounded-full p-3">
            <XCircle className="text-gray-900 dark:text-white w-12 h-12" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Pago cancelado</h2>
        <p className="text-gray-900 dark:text-white mb-6">
          El proceso de pago no se completó. Puedes intentarlo más tarde o volver al panel.
        </p>
        <Link
          to="/home"
          className="inline-flex items-center text-purple-600 hover:underline font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          Volver al panel
        </Link>
      </div>
    </div>
  );
}
