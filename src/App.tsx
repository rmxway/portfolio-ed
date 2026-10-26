import { AppProviders } from './shared/providers';
import { HomePage } from './views/home/ui/HomePage';

export const App = () => {
    return (
        <AppProviders>
            <HomePage />
        </AppProviders>
    );
};

export default App;
