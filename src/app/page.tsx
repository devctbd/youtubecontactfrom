import { ContactForm } from "@/components/custom/ContactFrom";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold mb-8">
          Next.js contact from with node mailer{" "}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              fill
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className=" inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
