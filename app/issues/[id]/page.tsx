import prisma from '@/lib/client';
import { notFound } from 'next/navigation';

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: IssueDetailPageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p> {issue.createdAt.toDateString()} </p>
    </div>
  );
};

export default IssueDetailPage;