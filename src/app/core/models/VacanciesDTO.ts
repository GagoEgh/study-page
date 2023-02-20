import { FormGroup } from "@angular/forms";

export class VacanciesDTO {
    createdAt?: string;
    description!: string;
    id?: number;
    shortDescription!: string;
    updatedAt?: string

    constructor(vacancieForm: FormGroup) {
        this.description = vacancieForm.get('description')?.value;
        this.shortDescription = vacancieForm.get('shortDescription')?.value;
    }
}