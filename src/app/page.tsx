import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl">Hello World</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          asperiores distinctio magnam ea totam, at dolor velit excepturi quis
          corrupti perferendis reprehenderit, autem explicabo deserunt
          consectetur hic deleniti! Hic, error.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>click Here</Button>
        <Button>click Here</Button>
      </div>
    </main>
  );
}
