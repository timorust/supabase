import PropsComponent from "@/components/PropsComponent";

export default function PropsAndChildComponent() {
  return (
    <>
      <PropsComponent integer={10} component={FloatingComponent} />
      <FloatingComponent />
    </>
  );
}

export function FloatingComponent() {
  return (
    <>
      <h2>The Floating component!</h2>
    </>
  );
}
