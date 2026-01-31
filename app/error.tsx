"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Wystąpił błąd</h1>
            <p className="text-muted mb-8 max-w-md">
                Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę lub wróć później.
            </p>
            <div className="flex gap-4">
                <Button onClick={() => reset()} variant="primary">
                    Spróbuj ponownie
                </Button>
                <Button onClick={() => window.location.href = "/"} variant="outline">
                    Wróć do strony głównej
                </Button>
            </div>
        </div>
    );
}
