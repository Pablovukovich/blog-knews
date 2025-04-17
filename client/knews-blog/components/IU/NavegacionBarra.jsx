import Link from "next/link"
import { MoveLeft } from 'lucide-react';
import { useRouter } from "next/navigation";
export default function NavegacionBarra() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
return(
    <>
      <div className="m-6 flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-2 rounded-lg shadow-md  border-b border-primary ">
      <button
        onClick={handleBack}
        type="button"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
      >
        <MoveLeft className="w-4 h-4" />
        Volver atrás
      </button>
</div>
    
    </>
)


}