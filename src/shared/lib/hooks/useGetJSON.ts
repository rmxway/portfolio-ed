import { useEffect, useState } from 'react';
import type { Project } from '@/types/entities';

export const useGetJSON = function (url: string = '') {
    const [data, setData] = useState<Project>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const load = async () => {
            setLoading(true);

            try {
                if (url == '') return;

                const response = await fetch(url, { signal: controller.signal });
                if (response.ok) {
                    const json: Project = await response.json();
                    if (typeof json === 'object') {
                        setData(json);
                    } else {
                        throw new Error('Error: Ошибка в типе данных');
                    }
                } else {
                    throw new Error('Error: Ошибка сервера');
                }
            } catch (e) {
                const err = e as Error;
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        load();

        return () => {
            if (import.meta.env.PROD) controller.abort();
        };
    }, [url]);

    return { data, error, loading } as const;
};
