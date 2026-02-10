import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
