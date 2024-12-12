import styles from './styles.module.css';
const DocsIdPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  console.log(id);
  return (
    <div>
      <h1 className={styles.title}>DocsIdPage {id}</h1>
    </div>
  );
};
export default DocsIdPage;
