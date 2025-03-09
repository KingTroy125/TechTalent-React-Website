
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MobilePreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Mobile App Available</h2>
          <p className="text-white/80 max-w-md">
            Take your recruitment process on the go. Download our mobile app to stay connected with top talent.
          </p>
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
            Download <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Mobile app preview"
            className="rounded-2xl shadow-2xl mx-auto max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
