import { IProps } from "@/types/IProps";

export default function PropsComponent(props: IProps) {
  return (
    <>
      <section className="title">
        <h2>The Props Component !</h2>
        <props.component />
        <p>{props.integer}</p>
      </section>
    </>
  );
}
