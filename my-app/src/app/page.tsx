import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      
      {/* shadcn/ui 컴포넌트 예제 섹션 */}
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">shadcn/ui 컴포넌트 예제</h1>
          <p className="text-lg text-muted-foreground">
            아래 컴포넌트들이 제대로 작동하는지 확인해보세요!
          </p>
        </div>

        {/* Card 컴포넌트 예제 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>카드 컴포넌트</CardTitle>
              <CardDescription>
                shadcn/ui의 Card 컴포넌트입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                이 카드는 제목, 설명, 내용을 포함할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>버튼과 배지</CardTitle>
              <CardDescription>
                다양한 버튼 스타일과 배지를 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">기본 버튼</Button>
                <Button variant="secondary">보조 버튼</Button>
                <Button variant="outline">아웃라인 버튼</Button>
                <Button variant="ghost">고스트 버튼</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">기본</Badge>
                <Badge variant="secondary">보조</Badge>
                <Badge variant="outline">아웃라인</Badge>
                <Badge variant="destructive">파괴적</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Input 컴포넌트 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>입력 필드</CardTitle>
            <CardDescription>
              다양한 입력 필드들을 테스트해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  이름
                </label>
                <Input id="name" placeholder="이름을 입력하세요" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <Input id="email" type="email" placeholder="이메일을 입력하세요" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                메시지
              </label>
              <Input id="message" placeholder="메시지를 입력하세요" />
            </div>
          </CardContent>
        </Card>

        {/* 테마 토글 버튼 */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            헤더의 테마 토글 버튼으로 다크/라이트 모드를 전환할 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
