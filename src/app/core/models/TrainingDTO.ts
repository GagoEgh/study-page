import { FormGroup } from "@angular/forms";

export class TrainingDTO {
    name!: string;
    description!: string;
    date?: string;
    type!: string;
    createdAt?: string;
    updatedAt?: string;
    mediaFiles?: File;
    constructor(traningForm: FormGroup) {
        this.name = traningForm.get('name')?.value;
        this.description = traningForm.get('description')?.value;
        this.type = traningForm.get('type')?.value;
        this.createdAt = traningForm.get('createdAt')?.value;
        this.mediaFiles = traningForm.get('file')?.value;
    }


}