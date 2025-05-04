import { Clock, Code, FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '@/components/ui/assets/header-logo.png'

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="flex items-center space-x-1 text-primary font-semibold">
        <Image
          src={logo}
          alt="Jay Research Logo"
          width={150}
          height={32}
        />
      </div>
    </div>
  );
}