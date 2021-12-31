import { $isLoading, startLoading, stopLoading } from './index';

$isLoading
    .on(startLoading, () => true)
    .on(stopLoading, () => false);